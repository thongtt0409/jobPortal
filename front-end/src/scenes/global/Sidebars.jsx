import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, colors, IconButton, Typography, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { tokens } from '../../theme';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} />
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebars = () => {
  const { pathname: currentPath } = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h4" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton
                  onClick={() => {
                    setIsCollapsed(!isCollapsed);
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: '10px 0 0 0 ' }}>
                  Thongttdev
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              title="Users"
              style={{
                color: colors.grey[100],
              }}
              icon={<PersonOutlinedIcon />}
              defaultOpen={currentPath.startsWith('/users')}
            >
              <Item
                title="Add User"
                to="/users/add"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="List User"
                to="/users/list"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Profile User"
                to="/users/profile"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu
              title="Charts"
              style={{
                color: colors.grey[100],
              }}
              icon={<LeaderboardOutlinedIcon />}
            >
              <Item
                title=" Bar Chart "
                to="/chars/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title=" Pie Chart "
                to="/charts/pie"
                icon={<PieChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title=" Line Chart "
                to="/chart/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title=" Geography Chart "
                to="/chars/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu
              title="Products"
              style={{
                color: colors.grey[100],
              }}
              icon={<CategoryOutlinedIcon />}
            >
              <Item
                title="Add Product "
                to="/products/add"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title=" Product List "
                to="/products/list"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title=" FAQ Page "
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebars;
