import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CardPersonalizado from "../CardPersonalizado/CardPersonalizado"; // Verifique o caminho se necessário

// Importe suas imagens aqui (exemplo de nomes)
import imagemCard1 from "../../assets/image/image1.jpg";
import imagemCard2 from "../../assets/image/image2.jpg";
import imagemCard3 from "../../assets/image/image3.jpg";

const ProductCards = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = <960px

    const backgroundColorCardSection = "#ebd4d9";

    return (
        <Box
            sx={{
                width: "100vw",
                // minHeight: "100vh" para ter a mesma altura da viewport que o HeroSection
                // Se o conteúdo transbordar, o minHeight causará scroll.
                // Se quiser que se ajuste ao conteúdo, use 'auto' ou um valor mínimo.
                minHeight: "80vh", // Forçando 100vh para ser igual ao HeroSection
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden", // Garante que nada extravase
                backgroundColor: backgroundColorCardSection,
                mt: -2,
            }}
        >
            <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "3rem" : "5rem",
                    textAlign: "center",
                    marginTop: { xs: "40px", md: "60px" }, // Padding top do título
                    marginBottom: { xs: "30px", md: "40px" },
                    paddingX: { xs: "20px", md: "40px" }, // Padding horizontal do título
                    maxWidth: "1200px", // Limita a largura do título, pode ser ajustado para alinhar com o HeroSection se ele tiver um max-width interno.
                    width: "100%", // Para que o paddingX funcione dentro do maxWidth\
                }}
            >
                Nossos Diferenciais
            </Typography>

            <Box
                sx={{
                    flex: 1, // Permite que este container ocupe o restante do espaço vertical
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "stretch", // Crucial para os cards terem a mesma altura
                    // Removido `gap` e `flexWrap` para os cards ficarem colados
                    width: "100%", // Ocupa 100% da largura do pai
                    // Não precisa de maxWidth aqui se os cards já têm minWidth/maxWidth percentuais
                    // e a ideia é que eles preencham 100% da largura.
                    // Para garantir que a altura mínima seja preenchida quando minHeight é 100vh no pai
                    // minHeight: isMobile
                    //     ? "auto"
                }}
            >
                {/* Cards instanciados */}
                <CardPersonalizado
                    imagem={imagemCard1}
                    titulo="Salgadinhos"
                    descricao="Encontre todos os snacks que você ama e descubra novos favoritos em nossa vasta seleção."
                    formatoImagem="quadrado"
                />

                <CardPersonalizado
                    imagem={imagemCard2}
                    titulo="Chocolates"
                    descricao="Nossa equipe está pronta para te ajudar a encontrar o doce perfeito para qualquer ocasião."
                    formatoImagem="portal"
                />

                <CardPersonalizado
                    imagem={imagemCard3}
                    titulo="Balas e pirulitos"
                    descricao="Garantimos doces sempre frescos e de alta qualidade para sua total satisfação."
                    formatoImagem="redondo"
                />
            </Box>
        </Box>
    );
};

export default ProductCards;
