import { PointerHighlight } from "../components/ui/pointer-highlight";

export function PointerHighlightDemo() {
  return (
    <div className="mx-auto max-w-lg py-4 md:py-8 text-2xl font-bold tracking-tight md:text-4xl text-[#cd6474]"  data-aos="zoom-in-right" data-aos-duration="2000"
    // style={{ fontFamily: "Great Vibes, cursive" }} 
    style={{ fontFamily: "Great Vibes ,Dancing Script" }}
     >
Mark your calendars for the day our forever begins{" "}   

 <PointerHighlight>
      <span className="relative z-10 p-4 text-[#113154]" 
      style={{ fontFamily: "Playfair Display, serif" }} > February 22, 2026.</span>
    </PointerHighlight>
  </div>
   
  );
}
