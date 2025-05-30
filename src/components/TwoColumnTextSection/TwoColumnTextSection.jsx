import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const TwoColumnTextSection = ({
    leftContent,
    rightContent,
    isLeftImage = false,
    isRightImage = false,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const sectionBackgroundColor = "#f1ede8";

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: "100vw",
                minHeight: "100vh", // Garante que a seção ocupe no mínimo 100% da altura da viewport
                overflow: "hidden",
                backgroundColor: sectionBackgroundColor,
                alignItems: "center",
                justifyContent: "center", // Centraliza os quadrantes verticalmente dentro da seção
            }}
        >
            {/* Primeiro Quadrante */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // ALINHA CONTEÚDO VERTICALMENTE
                    alignItems: "center", // ALINHA CONTEÚDO HORIZONTALMENTE
                    textAlign: "center",
                    padding: { xs: 2, md: 4 },
                    // Garante que o quadrante sempre ocupe altura para a centralização
                    height: isMobile ? "auto" : "100%", // Em mobile, auto, em desktop 100%
                    minHeight: isMobile ? "50vh" : "auto", // Força altura mínima em mobile
                    ...(isLeftImage &&
                        isMobile && { height: "300px", minHeight: "300px" }),
                }}
            >
                {leftContent}
            </Box>

            {/* Segundo Quadrante (Onde queremos space-around) */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column", // MUITO IMPORTANTE: Eixo principal vertical
                    justifyContent: "space-around", // <--- AQUI DEVE FUNCIONAR PARA O CONTEÚDO
                    alignItems: "center", // Alinha o conteúdo horizontalmente
                    textAlign: "center",

                    padding: { xs: 2, md: 4 },
                    // Garante que o quadrante sempre ocupe altura para a distribuição
                    height: isMobile ? "auto" : "100%",
                    // minHeight: isMobile ? "50vh" : "auto",
                    // ...(isRightImage &&
                    //     isMobile && { height: "300px", minHeight: "300px" }),
                }}
            >
                {rightContent}
            </Box>
        </Box>
    );
};

export default TwoColumnTextSection;
