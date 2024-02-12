import {
  DashboardOutlined,
  FileTextOutlined,
  SafetyOutlined,
  StopOutlined,
  MailOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
  UserOutlined,
  DragOutlined,
  ShoppingOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'dashboards-default',
        path: `${APP_PREFIX_PATH}/main/dashboards`,
        title: 'sidenav.main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'planner',
        path: `${APP_PREFIX_PATH}/main/planner`,
        title: 'sidenav.main.planner',
        icon: DragOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'sidenav.main.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'catalog-goods',
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: 'sidenav.main.catalog.goods',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'sidenav.main.catalog.categories',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'sidenav.main.catalog.collections',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'sidenav.main.catalog.combo',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'sidenav.main.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'sidenav.main.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'clients-list',
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: 'sidenav.main.clients.list',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'clients-group',
            path: `${APP_PREFIX_PATH}/main/clients-group`,
            title: 'sidenav.main.clients.group',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'sidenav.main.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'sidenav.main.promocodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'offline',
        path: `${APP_PREFIX_PATH}/main/offline`,
        title: 'sidenav.main.offline',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'address',
            path: `${APP_PREFIX_PATH}/main/offline/address`,
            title: 'sidenav.main.offline.address',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'geozones',
            path: `${APP_PREFIX_PATH}/main/offline/geozones`,
            title: 'sidenav.main.offline.geozones',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: 'sidenav.main.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'mailinglist',
        path: `${APP_PREFIX_PATH}/main/mailinglist`,
        title: 'sidenav.main.mailinglist',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'mobileapp',
        path: `${APP_PREFIX_PATH}/system/mobileapp`,
        title: 'sidenav.system.mobileapp',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
