import "./App.css";
import "./assets/Fonts/Fonts.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductCards from "./components/ProductCards/ProductCards";
import PhoneIcon from "@mui/icons-material/Phone";

import {
    Typography,
    useTheme,
    useMediaQuery,
    Box,
    Button,
    Link,
    ThemeProvider,
} from "@mui/material";

import TwoColumnTextSection from "./components/TwoColumnTextSection/TwoColumnTextSection";
import breakpointTheme from "./util/theme";

import newSectionImage from "./assets/image/image4.jpg";

function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const numeroWhatsApp = "5585987331754";
    const mensagemPadrao =
        "Olá, Bomboniere Manas! Gostaria de fazer um pedido.";
    const mensagemCodificada = encodeURIComponent(mensagemPadrao);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    const numeroTelefone = "558532792981";
    const linkTelefone = `tel:${numeroTelefone}`;

    const address = "Rua Barra Nova, 126, Jardim das Oliveiras, Fortaleza - CE";

    const googleMapsEmbedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23057.26935591707!2d-38.51637973675109!3d-3.7859595280485063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f152b4fe84b%3A0x5336abd7ad7f8b20!2sR.%20Barra%20Nova%2C%20126%20-%20Jardim%20Das%20Oliveiras%2C%20Fortaleza%20-%20CE%2C%2060820-160!5e1!3m2!1spt-BR!2sbr!4v1748633230627!5m2!1spt-BR!2sbr";
    const googleMapsUrl =
        "https://www.google.com/maps/place/R.+Barra+Nova,+126+-+Jardim+Das+Oliveiras,+Fortaleza+-+CE,+60820-160,+Brasil/@-3.8058209,-38.514088,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74f5146c9861d:0x3934335c09194edc!8m2!3d-3.8058209!4d-38.5115131!16s%2Fg%2F11c2g2x86h?entry=ttu";
    // --- SEÇÃO 1 ---
    const firstSectionLeftContent = (
        <>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile
                        ? "2.5rem"
                        : {
                              xs: "2.4rem",
                              sm: "2.5rem",
                              md: "3rem",
                              lg: "3.5rem",
                              xl: "3.5rem",
                          },
                    textAlign: "center",
                    mt: 2,
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
                Explore um universo de sabores e cores, feito para alegrar seus
                momentos mais especiais.
            </Typography>
        </>
    );

    const firstSectionRightContent = (
        <>
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "2.5rem" : "4rem",
                    textAlign: "center",
                    mt: isMobile ? "-4rem" : "0",
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
                    mt: isMobile ? "-10rem" : "0",
                    marginBottom: isMobile ? "1rem" : "1.5rem",
                }}
            >
                Na Bomboniere Manas, a qualidade é a nossa prioridade.
                Selecionamos cada doce com o maior carinho para garantir o
                frescor e o sabor que você merece.
            </Typography>
        </>
    );

    // --- SEÇÃO 2 ---
    const secondSectionLeftContent = (
        <Box
            sx={{
                height: isMobile ? "60vh" : "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
            }}
        >
            <img
                src={newSectionImage}
                alt="Descrição da Imagem da Nova Seção"
                style={{
                    width: "100%",
                    height: isMobile ? "60vh" : "100vh",
                    objectFit: "cover",
                    display: "block",
                }}
            />
        </Box>
    );

    const secondSectionRightContent = (
        <>
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "3.5rem" : "5rem",
                    textAlign: "center",
                }}
            >
                Fazemos entrega!
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
        </>
    );
    /* -- SEÇÃO 3 -- */
    const thirdSectionLeftContent = (
        <>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "2.5rem" : "4.5rem",
                    textAlign: "center",
                }}
            >
                Estamos esperando por você, faça já seu pedido!
            </Typography>
        </>
    );

    const thirdSectionRightContent = (
        <>
            <Box
                component="footer"
                sx={{
                    backgroundColor: "#ebd4d9",
                    padding: theme.spacing(3, 2),
                    textAlign: "center",
                    position: "relative",
                    bottom: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h7"
                    gutterBottom
                    sx={{
                        fontFamily: "tan-mon-cheri, sans-serif",
                        color: "#402620",
                        fontSize: isMobile ? "2rem" : "2.5rem",
                        textAlign: "center",
                    }}
                >
                    Loja Física
                </Typography>

                <Box
                    component="iframe"
                    src={googleMapsEmbedUrl}
                    width={isMobile ? "90%" : "80%"}
                    height="350px"
                    sx={{
                        border: 0,
                        borderRadius: theme.shape.borderRadius,
                        boxShadow: theme.shadows[8],
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização no Google Maps"
                />
            </Box>
            <Typography
                variant={isMobile ? "body2" : "body1"}
                color="#402620"
                align="center"
                sx={{
                    fontFamily: "Roboto, sans-serif",
                    marginBottom: theme.spacing(1),
                    fontSize: isMobile ? "1rem" : "1.8rem",
                }}
            >
                <Link
                    color="inherit"
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener"
                >
                    {address}
                </Link>
            </Typography>

            <Typography
                variant="h7"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "2rem" : "2.5rem",
                    textAlign: "center",
                }}
            >
                Instagram
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    fontFamily: "Roboto, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "1rem" : "1.8rem",
                    textAlign: "center",
                    marginBottom: isMobile ? "1rem" : "1.5rem",
                }}
            >
                @bombonieremanas
            </Typography>

            <Typography
                variant="h7"
                gutterBottom
                sx={{
                    fontFamily: "tan-mon-cheri, sans-serif",
                    color: "#402620",
                    fontSize: isMobile ? "2rem" : "2.5rem",
                    textAlign: "center",
                }}
            >
                Telefone
            </Typography>

            <Button
                variant="outlined"
                sx={{
                    fontFamily: "Roboto, sans-serif ",
                    borderColor: "#402620",
                    color: "#402620",
                    fontSize: {
                        xs: "0.9rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.5rem",
                        xl: "2rem",
                    },
                    padding: "10px 20px",
                    "&:hover": {
                        backgroundColor: "rgba(64, 38, 32, 0.04)",
                    },
                }}
                href={linkTelefone}
                startIcon={<PhoneIcon />}
            >
                (85)3279-2981
            </Button>
        </>
    );

    return (
        <div className="App">
            <ThemeProvider theme={breakpointTheme}>
                <HeroSection />
                <ProductCards />
                <section class="curved"></section>

                <TwoColumnTextSection
                    leftContent={firstSectionLeftContent}
                    rightContent={firstSectionRightContent}
                    isLeftImage={false}
                    isRightImage={false}
                    backgroundColor="#f1ede8"
                    minHeight={"100vh"}
                    marginTop={"-2rem"}
                />

                <TwoColumnTextSection
                    leftContent={secondSectionLeftContent}
                    rightContent={secondSectionRightContent}
                    isLeftImage={true}
                    isRightImage={false}
                    backgroundColor="#c4b3dd"
                    minHeight={"80vh"}
                />

                <TwoColumnTextSection
                    leftContent={thirdSectionLeftContent}
                    rightContent={thirdSectionRightContent}
                    isLeftImage={false}
                    isRightImage={false}
                    backgroundColor="#ebd4d9"
                    minHeight={"80vh"}
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
