import { Section } from "lucide-react";
import { useEffect, useState} from "react";

export const useScrollSpy = (SectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const scrollPosition = window.scrollY + offset;

        // Find the current section
        for (let i= SectionIds.length - 1; i >= 0; i--){
            const section = document.getElementById(SectionIds[i]);
            if(section)(
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if ( scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight
                    setActiveSection(SectionIds[i]);
                break;
                
            } 

      
        }
    }
    
};

handleScroll();

window.addEventListener('scroll', handleScroll, {passive: true});