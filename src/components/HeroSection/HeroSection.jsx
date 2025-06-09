import React from "react";
import "@fontsource/roboto";

import fini from "../../assets/image/fini.jpg";
import logoPurple from "../../assets/image/logoPurple.png";

import {
    Box,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    createTheme,
} from "@mui/material";

const HeroSection = () => {
    const theme = useTheme();
    const themeBreakpoints = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1537,
            },
        },
    });

    // Mapeando os breakpoints do Material-UI para sua lógica de responsividade
    const isXs = useMediaQuery(theme.breakpoints.only("xs")); // Apenas telas extra-pequenas (0-599px)
    const isSm = useMediaQuery(theme.breakpoints.only("sm")); // Apenas telas pequenas (600-959px)
    const isMd = useMediaQuery(theme.breakpoints.only("md")); // Apenas telas médias (960-1279px)
    const isLg = useMediaQuery(theme.breakpoints.only("lg")); // Apenas telas grandes (1280-1919px)
    const isXl = useMediaQuery(theme.breakpoints.only("xl")); // Apenas telas extra-grandes (1920px+)

    // Conveniência para agrupar dispositivos menores
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("lg")); // Menor que 960px (xs, sm)
    const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // Maior ou igual a 960px (md, lg, xl)

    const numeroWhatsApp = "5585987331754";
    const mensagemPadrao =
        "Olá, Bomboniere Manas! Gostaria de fazer um pedido.";
    const mensagemCodificada = encodeURIComponent(mensagemPadrao);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    const backgroundColorTextSection = "#c4b3dd";

    return (
        <Box
            sx={{
                display: "flex",
                // Direção da flexbox baseada em mobile/tablet ou desktop
                flexDirection: isMobileOrTablet ? "column" : "row",
                width: "100vw",
                // Garante que a seção ocupe 100% da altura da viewport em todos os tamanhos
                height: "100vh",
                minHeight: "100vh",
                overflow: "hidden", // Importante para o object-fit: cover e para evitar scroll indesejado
            }}
        >
            {/* Seção de Texto */}
            <Box
                sx={{
                    flex: 1, // Permite que o Box ocupe a metade disponível em desktop
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    mt: {
                        xs: "0rem", // Extra-small (smartphones pequenos)
                        sm: "0rem", // Small (smartphones maiores, tablets)
                        md: "-3rem", // Medium (tablets paisagem, desktops pequenos)
                        lg: "-4rem", // Large (desktops médios)
                        xl: "-5rem", // Extra-large (desktops grandes)
                    },
                    // Alinhamento de itens e texto responsivo
                    alignItems: isMobileOrTablet ? "center" : "flex-start",
                    textAlign: isMobileOrTablet ? "center" : "left",
                    padding: 4,
                    backgroundColor: backgroundColorTextSection,
                    // Altura responsiva: automática para mobile/tablet, 100vh para desktop
                    height: isMobileOrTablet ? "auto" : "100vh",
                    minHeight: isMobileOrTablet ? "auto" : "100vh",
                    paddingY: { xs: 4, sm: 6, md: 8 }, // Padding vertical responsivo
                }}
            >
                <img
                    src={logoPurple}
                    alt="Logo Bomboniere Manas"
                    style={{
                        // Tamanho da logo ajustado para cada breakpoint
                        width: isXs
                            ? "14rem"
                            : isSm
                            ? "15rem"
                            : isMd
                            ? "13rem"
                            : "13rem",

                        objectFit: "contain",
                        display: "block",
                        alignSelf: "center",
                    }}
                />
                <Typography
                    variant="h1"
                    gutterBottom
                    sx={{
                        fontFamily: "tan-mon-cheri, sans-serif",
                        color: "#402620",
                        // Tamanho da fonte H3 ajustado para cada breakpoint
                        fontSize: {
                            xs: "2.4rem", // Extra-small (smartphones pequenos)
                            sm: "2.5rem", // Small (smartphones maiores, tablets)
                            md: "3rem", // Medium (tablets paisagem, desktops pequenos)
                            lg: "3.5rem", // Large (desktops médios)
                            xl: "3.5rem", // Extra-large (desktops grandes)
                        },
                        mt: { xs: 3, sm: 4, md: 6, lg: 8 }, // Margem superior responsiva
                        alignSelf: "center",
                        textAlign: "center",
                        lineHeight: 1.1,
                    }}
                >
                    A Maior variedade em doces da cidade
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontFamily: "Roboto, sans-serif ",
                        color: "#402620",
                        // Tamanho da fonte H6 ajustado para cada breakpoint
                        fontSize: {
                            xs: "1.3rem",
                            sm: "1.1rem",
                            md: "1.3rem",
                            lg: "1.5rem",
                            xl: "1.6rem",
                        },
                        alignSelf: "center",
                        textAlign: "center",
                        mt: 2,
                    }}
                >
                    Horário de funcionamento:
                    <br /> Seg-Sáb: 07:30 - 18:00
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        fontFamily: "Roboto, sans-serif ",
                        backgroundColor: "#402620",
                        color: "#c4b3dd",
                        // Tamanho da fonte do botão ajustado para cada breakpoint
                        fontSize: {
                            xs: "1.2rem",
                            sm: "1rem",
                            md: "1.2rem",
                            lg: "1.7rem",
                            xl: "1.8rem",
                        },
                        alignSelf: "center",
                        mt: { xs: 3, sm: 4, md: 5 }, // Margem superior do botão responsiva
                        padding: "10px 20px",
                        "&:hover": {
                            backgroundColor: "#5a3d34",
                        },
                    }}
                    href={linkWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Faça seu pedido!
                </Button>
            </Box>

            {/* Seção da Imagem */}
            <Box
                sx={{
                    flex: 1, // Ocupa a outra metade disponível em desktop
                    // Altura da imagem responsiva
                    height: {
                        xs: "250px", // Muito pequena (smartphones pequenos)
                        sm: "350px", // Pequena (smartphones maiores)
                        md: "450px", // Média (tablets em modo paisagem, desktops pequenos)
                        lg: "100vh", // Grande (desktops médios)
                        xl: "100vh", // Extra-grande (desktops grandes)
                    },
                    minHeight: {
                        xs: "250px",
                        sm: "350px",
                        md: "450px",
                        lg: "100vh",
                        xl: "100vh",
                    },
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={fini}
                    alt="Doces Fini"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Garante o "zoom" para preencher o espaço
                        display: "block",
                        margin: 0,
                        padding: 0,
                    }}
                />

                {/* Gradiente de Transição - Superior para Mobile/Tablet, Esquerda para Desktop */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        // Altura/largura do gradiente e direção baseada em mobile/tablet ou desktop
                        height: isMobileOrTablet ? "50px" : "100%",
                        background: isMobileOrTablet
                            ? `linear-gradient(to bottom, ${backgroundColorTextSection} 0%, transparent 100%)`
                            : `linear-gradient(to right, ${backgroundColorTextSection} 0%, transparent 25%)`,
                        zIndex: 1,
                    }}
                />

                {/* Gradiente de Transição - Inferior para Mobile/Tablet, Direita para Desktop */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: isMobileOrTablet ? "50px" : "100%",
                        background: isMobileOrTablet
                            ? `linear-gradient(to top, ${backgroundColorTextSection} 0%, transparent 0%)`
                            : `linear-gradient(to left, ${backgroundColorTextSection} 0%, transparent 25%)`,
                        zIndex: 1,
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
