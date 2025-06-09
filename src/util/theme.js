// src/theme.js
import { createTheme } from "@mui/material/styles";

const breakpointTheme = createTheme({
    breakpoints: {
        values: {
            // Aqui você define seus próprios valores em pixels para cada breakpoint.
            // Você DEVE fornecer todos os breakpoints padrão (xs, sm, md, lg, xl)
            // mesmo se não for alterá-los, para evitar que o Material-UI use os valores padrão.
            xs: 0, // Exemplo: Dispositivos muito pequenos (smartphones em retrato)
            sm: 480, // Exemplo: Smartphones em paisagem, tablets pequenos
            md: 768, // Exemplo: Tablets, laptops pequenos
            lg: 1024, // Exemplo: Laptops, desktops médios
            xl: 1535, // Exemplo: Desktops grandes
            // Você também pode adicionar novos breakpoints personalizados:
            // wide: 1920,
            // ultraWide: 2560,
        },
        // Você também pode alterar a unidade (padrão é 'px')
        // unit: 'rem',
        // ou o step (usado para down() e between() para criar lacunas)
        // step: 5, // Padrão é 5.
    },
    // Você pode personalizar outras partes do tema aqui (paleta, tipografia, etc.)
    palette: {
        primary: {
            main: "#402620",
        },
        secondary: {
            main: "#c4b3dd",
        },
        // ...
    },
    typography: {
        fontFamily: ["Roboto", '"tan-mon-cheri"', "sans-serif"].join(","),
        // ...
    },
});

export default breakpointTheme;
