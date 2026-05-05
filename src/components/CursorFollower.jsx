import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    };

    const onEnter = () => ring.classList.add("hovered");
    const onLeave = () => ring.classList.remove("hovered");

    let frame;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      rx = lerp(rx, mx, 0.13);
      ry = lerp(ry, my, 0.13);
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      frame = requestAnimationFrame(animate);
    };
    animate();

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, label"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot  hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
};

export default CursorFollower;
