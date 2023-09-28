import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import json from '@/pages/json/icons.json'

export default function Home() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <main>
            {json.map((data, index) => (
                <div key={index}>
                    {currentTheme === 'dark' ? (
                        <button
                            onClick={() => setTheme('light')}
                        >{data.darkmode && (
                            <Image src={data.darkmode} alt="logo" height={25} width={25} />
                        )}
                        </button>
                    ) : (
                        <button
                            onClick={() => setTheme('dark')}
                        > {data.lightmode && (
                            <Image src={data.lightmode} alt="logo" height={25} width={25} />
                        )}
                        </button>
                    )}
                </div>
            ))
            }
        </main >
    );
}