import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const TwoColumnTextSection = ({
    leftContent,
    rightContent,
    isLeftImage = false, // <-- Propriedade para indicar se o conteúdo é uma imagem
    isRightImage = false, // <-- Propriedade para indicar se o conteúdo é uma imagem
    backgroundColor = true,
    minHeight,
    marginTop = 0,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: "100vw",
                minHeight: { minHeight },
                overflow: "hidden",
                backgroundColor: { backgroundColor },
                alignItems: "center",
                justifyContent: "center",
                mt: { marginTop },
            }}
        >
            {/* Primeiro Quadrante */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden",
                    height: "100%",
                    // Ajuste de minHeight para garantir que a imagem tenha espaço em mobile
                    minHeight: isMobile
                        ? isLeftImage
                            ? "50vh" // Um pouco mais de altura para a imagem em mobile
                            : "50vh"
                        : "auto",
                }}
            >
                {leftContent}
            </Box>

            {/* Segundo Quadrante */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "column",
                    justifyContent: "space-around", // Mantido para o texto+botão
                    alignItems: "center",
                    textAlign: "center",
                    padding: { xs: 2, md: 4 },
                    height: "100%",
                    // Ajuste de minHeight para garantir que o texto/botão tenha espaço em mobile
                    minHeight: isMobile
                        ? isRightImage
                            ? "60vh" // Se for imagem aqui, daria mais altura
                            : "50vh"
                        : "auto",
                }}
            >
                {rightContent}
            </Box>
        </Box>
    );
};

export default TwoColumnTextSection;
