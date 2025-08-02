import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600,
        });
    }, []);

    return null; // 表示するUIはないからnullでOK
}
