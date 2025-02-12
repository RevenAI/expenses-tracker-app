import {
    defineConfig,
    createSystem
} from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        breakpoints: {
            sm: "320px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        tokens: {
            colors: {
                primary: "#3182CE", // Blue (light mode primary)
                secondary: "#2D3748", // Dark gray (light mode secondary)
                accent: "#D69E2E", // Yellow-gold (for buttons, highlights)
                background: {
                    base: "#FFFFFF", // White background (light mode)
                    _dark: "#1A202C", // Dark mode background
                },
                text: {
                    base: "#2D3748", // Dark gray text (light mode)
                    _dark: "#E2E8F0", // Light gray text (dark mode)
                },
                danger: {
                    base: "#EE0F0F",
                    _dark: "#FF6B6B"
                }, // Red for errors
            },
        },
        semanticTokens: {
            colors: {
                text: {
                    value: {
                        base: "{colors.text.base}",
                        _dark: "{colors.text._dark}"
                    },
                },
                background: {
                    value: {
                        base: "{colors.background.base}",
                        _dark: "{colors.background._dark}"
                    },
                },
                buttonBg: {
                    value: {
                        base: "{colors.primary}",
                        _dark: "{colors.accent}"
                    },
                },
                buttonHoverBg: {
                    value: {
                        base: "{colors.accent}",
                        _dark: "{colors.primary}"
                    },
                },
            },
        },
        keyframes: {
            spin: {
                from: {
                    transform: "rotate(0deg)"
                },
                to: {
                    transform: "rotate(360deg)"
                },
            },
        },
    },
});

/* const system = createSystem(config);

export default system */

export default createSystem(config)