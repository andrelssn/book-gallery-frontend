import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Book, Person, Home as HomeIcon } from "@mui/icons-material";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // define qual tab está ativa com base na URL
    const currentPath = location.pathname;
    const tabValue =
        currentPath === "/" ? 0 : currentPath.startsWith("/livros") ? 1 : 2;

    const handleChange = (event, newValue) => {
        if (newValue === 0) navigate("/");
        if (newValue === 1) navigate("/livros");
        if (newValue === 2) navigate("/autores");
    };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <AppBar
                position="static"
                sx={{
                    bgcolor: "#2F3330",
                    p: 2,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" fontWeight="bolder" color="#ffffff" gutterBottom>
                    📚 Book Gallery
                </Typography>

                {/* Tabs de navegação */}
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    textColor="inherit"
                    TabIndicatorProps={{ style: { backgroundColor: "#79643F" } }}
                >
                    <Tab icon={<HomeIcon />} label="Início" />
                    <Tab icon={<Book />} label="Livros" />
                    <Tab icon={<Person />} label="Autores" />
                </Tabs>
            </AppBar>

            {/* Conteúdo dinâmico */}
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    bgcolor: "#2F3330",
                    color: "#fff",
                    textAlign: "center",
                    py: 2,
                    mt: "auto",
                }}
            >
                <Typography variant="body2">
                    © 2025 Book Gallery - Todos os direitos reservados
                </Typography>
            </Box>
        </Box>
    );
}
