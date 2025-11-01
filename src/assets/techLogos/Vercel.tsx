const Vercel = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={128}
            height={128}
            viewBox="0 0 128 128"
            {...props}
        >
            <defs>
                <filter
                    id="whiteShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="3" /* controla el desenfoque */
                        floodColor="white" /* color de la sombra */
                        floodOpacity="0.8" /* opacidad de la sombra */
                    />
                </filter>
            </defs>

            {/* Aplicamos el filtro al path */}
            <path
                d="M63.984 17.184 127.964 128H0Zm0 0"
                style={{
                    fillRule: "nonzero",
                    fill: "#000",
                    filter: "url(#whiteShadow)",
                }}
            />
        </svg>
    );
};

export default Vercel;
