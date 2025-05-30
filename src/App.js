import "./App.css";
import "./assets/Fonts/Fonts.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductCards from "./components/ProductCards/ProductCards";

import { Typography, useTheme, useMediaQuery, Box } from "@mui/material"; // Mantenha Box aqui para o JSX

import TwoColumnTextSection from "./components/TwoColumnTextSection/TwoColumnTextSection";

function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // --- Conteúdo da Nova Seção (Quadrante Esquerdo) ---
    const newSectionLeftContent = (
        <>
            {/* O Box com a imagem do logo que você tinha foi removido, se quiser, pode adicionar de volta. */}
            {/* Exemplo de como você poderia adicionar uma imagem se o design pedir: */}
            {/* <img
                src={logoPurple}
                alt="Logo Bomboniere Manas"
                style={{
                    width: isMobile ? "15rem" : "22rem",
                    objectFit: "cover",
                    display: "block",
                    alignSelf: "center", // Alinha a imagem no centro horizontal do seu próprio container
                    textAlign: "center",
                    marginBottom: isMobile ? "1rem" : "2rem",
                }}
            /> */}
            <Box
                sx={{
                    justifyContent: "space-around",
                    // height: "100vh",
                    mt: isMobile ? "-8rem" : "0rem",
                    // display: "flex",
                    flexDirection: "column", // MUITO IMPORTANTE: Eixo principal vertical
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontFamily: "tan-mon-cheri, sans-serif",
                        color: "#402620",
                        fontSize: isMobile ? "2.5rem" : "6rem",
                        textAlign: "center",
                        mt: isMobile ? "2rem" : "0rem",
                    }}
                >
                    Desde 1992 oferecendo os melhores produtos e serviços.
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontFamily: "coco-gothic, sans-serif",
                        color: "#402620",
                        fontSize: isMobile ? "1rem" : "2rem",
                        textAlign: "center",
                        mt: 2,
                    }}
                >
                    Explore um universo de sabores e cores, feito para alegrar
                    seus momentos mais especiais.
                </Typography>
            </Box>
        </>
    );

    // --- Conteúdo da Nova Seção (Quadrante Direito) ---
    const newSectionRightContent = (
        <>
            <Box
                sx={{
                    justifyContent: "space-around",
                    height: "100vh",
                    mt: isMobile ? "-8rem" : "0rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontFamily: "tan-mon-cheri, sans-serif",
                        color: "#402620",
                        fontSize: isMobile ? "2.5rem" : "4.5rem",
                        textAlign: "center",
                        // Removido marginTop/marginBottom fixos que podem atrapalhar a centralização vertical
                        // Espaçamento será gerenciado pelo Box pai flex e seus itens
                    }}
                >
                    Nosso Compromisso
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        fontFamily: "coco-gothic, sans-serif",
                        color: "#402620",
                        fontSize: isMobile ? "1rem" : "1.8rem",
                        textAlign: "center",
                        marginBottom: isMobile ? "1rem" : "1.5rem",
                    }}
                >
                    Na Bomboniere Manas, a qualidade é a nossa prioridade.
                    Selecionamos cada doce com o maior carinho para garantir o
                    frescor e o sabor que você merece.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "coco-gothic, sans-serif",
                        color: "#402620",
                        fontSize: isMobile ? "1rem" : "1.8rem",
                        textAlign: "center",
                    }}
                >
                    Comprometemo-nos a proporcionar uma experiência doce
                    inesquecível, do primeiro contato à última mordida.
                </Typography>
            </Box>
        </>
    );

    return (
        <div className="App">
            <HeroSection />
            <ProductCards />
            <TwoColumnTextSection
                leftContent={newSectionLeftContent}
                rightContent={newSectionRightContent}
                // As cores de background já são definidas internamente no TwoColumnTextSection
                backgroundColorLeft="#f0e4f2" // Estes serão ignorados pelo TwoColumnTextSection
                backgroundColorRight="#e0d0e3" // Estes serão ignorados pelo TwoColumnTextSection
                isLeftImage={false}
                isRightImage={false}
            />
        </div>
    );
}

export default App;
