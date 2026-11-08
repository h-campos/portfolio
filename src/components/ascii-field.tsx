import { useEffect, useRef } from "react";

const GLYPHS = "  .·:-=+*#";
const ROW = 12;
const FRAME_MS = 33;
const HALO = 9;

type Pointer = {
  x: number;
  y: number;
};

export const AsciiField = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const started = performance.now();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = 0;
    let visible = false;
    let pointer: Pointer | null = null;
    let cols = 0;
    let rows = 0;
    let cellW = 1;
    let dpr = 1;
    let font = "";
    let atlas: HTMLCanvasElement | null = null;
    let atlasKey = "";
    let radial = new Float32Array(0);

    const buildAtlas = (): void => {
      const base = getComputedStyle(canvas).color;
      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-ink").trim();
      const key = base + accent;
      if (atlas && atlasKey === key) return;

      const cell = Math.ceil(cellW * dpr);
      const sheet = document.createElement("canvas");
      sheet.width = cell * GLYPHS.length;
      sheet.height = ROW * dpr * 2;
      const sctx = sheet.getContext("2d");
      if (!sctx) return;

      sctx.scale(dpr, dpr);
      sctx.font = font;
      sctx.textBaseline = "top";
      for (const [line, color] of [base, accent].entries()) {
        sctx.fillStyle = color;
        for (let i = 0; i < GLYPHS.length; i += 1) sctx.fillText(GLYPHS[i], (cell * i) / dpr, ROW * line);
      }
      atlas = sheet;
      atlasKey = key;
    };

    const resize = (): void => {
      const { width, height } = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      font = `12px ${getComputedStyle(canvas).fontFamily}`;
      ctx.font = font;
      cellW = ctx.measureText("M").width || 7;
      cols = Math.ceil(width / cellW);
      rows = Math.ceil(height / ROW);
      radial = new Float32Array(cols * rows);
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) radial[y * cols + x] = 0.12 * Math.hypot(x - 0.7 * cols, 2 * y - rows);
      }
      atlas = null;
    };

    const draw = (t: number): void => {
      buildAtlas();
      if (!atlas) return;

      const cell = Math.ceil(cellW * dpr);
      const rowH = ROW * dpr;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const waveX = new Float32Array(cols);
      for (let x = 0; x < cols; x += 1) waveX[x] = Math.sin(0.11 * x + 0.0005 * t);
      const waveY = new Float32Array(rows);
      for (let y = 0; y < rows; y += 1) waveY[y] = Math.sin(0.35 * y - 0.0007 * t);
      const waveD = new Float32Array(cols + 2 * rows);
      for (let i = 0; i < waveD.length; i += 1) waveD[i] = Math.sin(0.07 * i + 0.0003 * t);
      const spin = 0.0012 * t;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          let density = (waveX[x] + waveY[y] + waveD[x + 2 * y] + Math.sin(radial[y * cols + x] - spin) + 4) / 8;
          let halo = 0;
          if (pointer) {
            const dx = ((x - pointer.x) * cellW) / ROW;
            const dy = y - pointer.y;
            if (Math.abs(dx) < HALO && Math.abs(dy) < HALO) halo = Math.max(0, 1 - Math.hypot(dx, dy) / HALO);
          }
          density = Math.min(1, density * density + 0.6 * halo);
          const index = Math.floor(density * (GLYPHS.length - 1));
          if (GLYPHS[index] === " ") continue;
          ctx.drawImage(atlas, index * cell, halo > 0.25 ? rowH : 0, cell, rowH, Math.round(x * cellW * dpr), y * rowH, cell, rowH);
        }
      }
    };

    const frame = (now: number): void => {
      raf = requestAnimationFrame(frame);
      if (now - last < FRAME_MS) return;
      last = now;
      draw(now - started);
    };

    // Under reduced motion the field is drawn once, as a still frame, and never loops.
    const sync = (): void => {
      cancelAnimationFrame(raf);
      if (!visible || document.hidden) return;
      if (reducedMotion.matches) draw(0);
      else raf = requestAnimationFrame(frame);
    };

    const onPointerMove = (event: PointerEvent): void => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) / cellW;
      const y = (event.clientY - rect.top) / ROW;
      pointer = x < -8 || y < -8 || x > cols + 8 || y > rows + 8 ? null : { x, y };
    };

    const onPointerLeave = (): void => {
      pointer = null;
    };

    const onTheme = (): void => {
      atlas = null;
      if (reducedMotion.matches) sync();
    };

    const resizer = new ResizeObserver(() => {
      resize();
      sync();
    });
    resizer.observe(canvas);

    const watcher = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    watcher.observe(canvas);

    const theme = new MutationObserver(onTheme);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);

    return () => {
      cancelAnimationFrame(raf);
      resizer.disconnect();
      watcher.disconnect();
      theme.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={ref} className="ascii-field" aria-hidden="true" />;
};
