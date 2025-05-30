import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const CardPersonalizado = ({ imagem, titulo, descricao, formatoImagem }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = <960px

    let borderRadiusStyle = {};
    let imageContainerSize = isMobile ? "220px" : "320px"; // Increased size for both mobile and desktop

    switch (formatoImagem) {
        case "quadrado":
            borderRadiusStyle = { borderRadius: "15px" };
            break;
        case "portal":
            borderRadiusStyle = {
                borderTopLeftRadius: "50% 50%",
                borderTopRightRadius: "50% 50%",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
            };
            break;
        case "redondo":
            borderRadiusStyle = { borderRadius: "50%" };
            break;
        default:
            borderRadiusStyle = { borderRadius: "0" };
    }

    return (
        <Box
            sx={{
                // Largura dos cards:
                // Desktop (md e acima): Exatamente 1/3 da largura do container, subtraindo o gap.
                // Mobile (xs, sm): Ocupa 100% menos o padding horizontal do container pai.
                width: isMobile ? "100%" : "calc(33.3333% - (30px * 2 / 3))",
                maxWidth: isMobile ? "390px" : "420px", // Limita a largura máxima do card individualmente em desktop
                minWidth: isMobile ? "320px" : "360px", // Garante que o card não fique muito pequeno em larguras intermediárias
                padding: "20px", // Padding interno do conteúdo do card
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "transparent", // ALWAYS TRANSPARENT
                borderRadius: "0", // ALWAYS 0, no longer rounded on mobile
                boxShadow: "none", // ALWAYS NONE, no longer shadow on mobile
                position: "relative",
                marginBottom: isMobile ? "30px" : "0", // Vertical gap on mobile
                "&:last-of-type": {
                    marginBottom: isMobile ? "0" : "0",
                },
            }}
        >
            <Box
                sx={{
                    width: imageContainerSize,
                    height: imageContainerSize,
                    overflow: "hidden",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    ...borderRadiusStyle,
                }}
            >
                <img
                    src={imagem}
                    alt={titulo}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>
            <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                    fontFamily: "coco-gothic, sans-serif",
                    color: "#402620",
                    mt: 1,
                }}
            >
                {titulo}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontFamily: "coco-gothic, sans-serif",
                    color: "#666",
                    paddingX: "10px",
                    fontSize: isMobile ? "1rem" : "1.5rem",
                }}
            >
                {descricao}
            </Typography>
        </Box>
    );
};

export default CardPersonalizado;
