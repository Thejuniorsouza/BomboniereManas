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
} from "@mui/material";

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = <960px

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
                flexDirection: isMobile ? "column" : "row",
                width: "100vw",
                minHeight: "100vh",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: isMobile ? "center" : "flex-start",
                    textAlign: isMobile ? "center" : "left",
                    padding: 4,
                    backgroundColor: backgroundColorTextSection,
                }}
            >
                <img
                    src={logoPurple}
                    alt="Fini"
                    style={{
                        width: isMobile ? "15rem" : "22rem",
                        // height: "100%",
                        objectFit: "cover",
                        display: "block",
                        alignSelf: "center",
                        textAlign: "center",
                    }}
                />
                {/* <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontFamily: "Roboto, sans-serif ",
                        color: "#402620",
                        justifyContent: "center",
                        fontSize: isMobile ? "1rem" : "2rem",
                        alignSelf: "center",
                        textAlign: "center",
                        mt: 2,
                    }}
                >
                    BOMBONIERE MANAS
                </Typography> */}
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontFamily: "tan-mon-cheri, sans-serif",
                        color: "#402620",
                        justifyContent: "center",
                        fontSize: isMobile ? "2.5rem" : "6rem",
                        mt: isMobile ? 5 : 8,
                        alignSelf: "center",
                        textAlign: "center",
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
                        justifyContent: "center",
                        fontSize: isMobile ? "1rem" : "2rem",
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
                        fontSize: isMobile ? "1rem" : "2rem",
                        alignSelf: "center",
                        mt: 2,
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
            <Box
                sx={{
                    flex: 1,
                    height: isMobile ? "300px" : "100vh",
                    overflow: "hidden",
                    position: "relative", // Necessário para posicionar o gradiente
                    // O gradiente aqui é para o caso mobile, onde a imagem fica abaixo do texto
                    // Para o desktop, o gradiente será na borda esquerda da imagem
                    "&::before": isMobile && {
                        // Apenas para mobile
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "50px", // Altura do fade
                        // Fade de cima para baixo, usando a cor do quadrante de texto
                        background: `linear-gradient(to bottom, ${backgroundColorTextSection} 0%, transparent 100%)`,
                        zIndex: 1, // Garante que o gradiente fique por cima da imagem
                    },
                    // Gradiente para desktop (quando a imagem está à direita do texto)
                    "&::after": !isMobile && {
                        // Apenas para desktop
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0, // Inicia na borda esquerda da imagem
                        bottom: 0,
                        width: "100px", // Largura do fade
                        // Fade da cor do quadrante de texto para transparente
                        background: `linear-gradient(to right, ${backgroundColorTextSection} 0%, transparent 100%)`,
                        zIndex: 1, // Garante que o gradiente fique por cima da imagem
                    },
                }}
            >
                <img
                    src={fini}
                    alt="Fini"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
