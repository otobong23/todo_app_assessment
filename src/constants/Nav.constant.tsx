import { Call, Category, Edit, Folder2, MenuBoard, MessageEdit, Note, NotificationBing, People, Stickynote, TaskSquare } from 'iconsax-reactjs';
import { LuNewspaper } from "react-icons/lu";

export const mainSideNavItems = (size: number = 18, color: string = '#7988A9') => ([
  {
    key: 'home',
    name: 'Home',
    icon: <Category size={size} color={color} />,
    url: '/'
  },
  {
    key: 'mkvanbinnen',
    name: 'MKVanBinnen',
    icon: <Stickynote size={size} color={color} />,
    url: '/'
  },
  {
    key: 'documentManagement',
    name: 'Document Management',
    icon: <Folder2 size={size} color={color} />,
    url: '/'
  },
  {
    key: 'patientInformation',
    name: 'Patient Information',
    icon: <People size={size} color={color} />,
    url: '/'
  },
  {
    key: 'agenda',
    name: 'Agenda',
    icon: <Note size={size} color={color} />,
    url: '/'
  },
  {
    key: 'myDepartment',
    name: 'My Department',
    icon: <LuNewspaper size={size} color={color} />,
    subItems: [
      { name: 'News', Key: 'news', url: '/' },
      { name: 'Members', Key: 'members', url: '/' },
      { name: 'To-Do', Key: 'to-do', url: '/' },
      { name: 'Form Task', Key: 'formTask', url: '/' },
      { name: 'Agenda', Key: 'agenda', url: '/' },
      { name: 'Follow up system', Key: 'followUpSystem', url: '/' },
      { name: 'Group Settings', Key: 'groupSettings', url: '/', hasDropdown: true },
    ]
  },
  {
    key: 'phoneNumbers',
    name: 'Phone Numbers',
    icon: <Call size={size} color={color} />,
    url: '/'
  },
  {
    key: 'myToDoProtocols',
    name: 'My to do Protocols',
    icon: <TaskSquare size={size} color={color} />,
    url: '/'
  },
  {
    key: 'myNotifications',
    name: 'My Notifications',
    icon: <NotificationBing size={size} color={color} />,
    url: '/'
  },
  {
    key: 'knowledgeBase',
    name: 'Knowledge Base',
    icon: <MenuBoard size={size} color={color} />,
    url: '/'
  },
  {
    key: 'superAdmin',
    name: 'Super Admin',
    icon: <MessageEdit size={size} color={color} />,
    url: '/'
  },
  {
    key: 'admin',
    name: 'Admin',
    icon: <Edit size={size} color={color} />,
    subItems: [
      { name: 'Agenda', Key: 'agenda', url: '/' },
      { name: 'News', Key: 'news', url: '/' },
      { name: 'Poll', Key: 'poll', url: '/' },
      { name: 'Department Rules', Key: 'departmentRules', url: '/' },
      { name: 'Follow up system', Key: 'followUpSystem', url: '/' }
    ]
  },
]);