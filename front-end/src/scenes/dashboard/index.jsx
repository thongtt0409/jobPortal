import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from '../global/Topbar';
import Sidebars from '../global/Sidebars';

const Dashboard = (props) => {
  console.log('DATA::::', props);
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <Sidebars />
            <main className="content">
              <Topbar />
              {props.children}
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Dashboard;
