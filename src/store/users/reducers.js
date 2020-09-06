// import { SET_USER_ACTIVE } from "./actions";
import {
  SET_USER_ACTIVE,
  SET_USER_INACTIVE,
  SET_FILTER_VALUE,
  CLEAR_ACTIVE_USERS,
  SORT_INACTIVE_USERS_AZ,
  BAN_ACTIVE_USERS,
  FILTER_BY_ROOM,
  CHANGE_ACTIVE_ROOM,
  FETCH_USERS,
} from "./actions";

const defaultState = {
  allUsers: {
    159985870458322940: {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322940",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322941": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322941",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322942": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322942",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322943": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322943",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322944": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322944",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322945": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322945",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322946": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322946",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322947": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322947",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322948": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322948",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322949": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322949",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322950": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322950",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322951": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322951",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322952": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322952",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322953": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322953",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322954": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322954",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322955": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322955",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322956": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322956",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322957": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322957",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322958": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322958",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322959": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322959",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322960": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322960",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322961": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322961",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322962": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322962",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322963": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322963",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322964": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322964",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322965": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322965",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322966": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322966",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322967": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322967",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322968": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322968",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322969": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322969",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322970": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322970",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322971": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322971",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
    "159985870458322972": {
      name: "MEE6",
      nickname: "None",
      id: "159985870458322972",
      icon:
        "https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.webp?size=1024",
      banned: false,
      muted: false,
    },
  },
  filterValue: "",
  activeUsersIds: [],
  inactiveUsersIds: [
    "159985870458322940",
    "159985870458322941",
    "159985870458322942",
    "159985870458322943",
    "159985870458322944",
    "159985870458322945",
    "159985870458322946",
    "159985870458322947",
    "159985870458322948",
    "159985870458322949",
    "159985870458322950",
    "159985870458322951",
    "159985870458322952",
    "159985870458322953",
    "159985870458322954",
    "159985870458322955",
    "159985870458322956",
    "159985870458322957",
    "159985870458322958",
    "159985870458322959",
    "159985870458322960",
    "159985870458322961",
    "159985870458322962",
    "159985870458322963",
    "159985870458322964",
    "159985870458322965",
    "159985870458322966",
    "159985870458322967",
    "159985870458322968",
    "159985870458322969",
    "159985870458322970",
    "159985870458322971",
    "159985870458322972",
  ],
  rooms: {
    room1: [
      "159985870458322940",
      "159985870458322941",
      "159985870458322942",
      "159985870458322943",
      "159985870458322944",
      "159985870458322945",
      "159985870458322946",
      "159985870458322947",
    ],
    room2: [
      "159985870458322957",
      "159985870458322958",
      "159985870458322959",
      "159985870458322960",
      "159985870458322961",
      "159985870458322962",
      "159985870458322963",
      "159985870458322964",
      "159985870458322965",
      "159985870458322966",
      "159985870458322967",
      "159985870458322968",
    ],
    room3: ["159985870458322971", "159985870458322972"],
    all: [
      "159985870458322940",
      "159985870458322941",
      "159985870458322942",
      "159985870458322943",
      "159985870458322944",
      "159985870458322945",
      "159985870458322946",
      "159985870458322947",
      "159985870458322948",
      "159985870458322949",
      "159985870458322950",
      "159985870458322951",
      "159985870458322952",
      "159985870458322953",
      "159985870458322954",
      "159985870458322955",
      "159985870458322956",
      "159985870458322957",
      "159985870458322958",
      "159985870458322959",
      "159985870458322960",
      "159985870458322961",
      "159985870458322962",
      "159985870458322963",
      "159985870458322964",
      "159985870458322965",
      "159985870458322966",
      "159985870458322967",
      "159985870458322968",
      "159985870458322969",
      "159985870458322970",
      "159985870458322971",
      "159985870458322972",
    ],
  },
  activeRoom: "all",
};

// const defaultState_ = {
//   allUsers: {},
//   filterValue: "",
//   activeUsersIds: [],
//   inactiveUsersIds: [],
//   rooms: {
//     all: []
//   },
//   activeRoom: "all",
// }

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_ACTIVE: {
      let { inactiveUsersIds, activeUsersIds, rooms, activeRoom } = state;
      const userId = String(action.payload.userId);
      if (activeUsersIds.includes(userId)) return { ...state };

      const index = rooms[activeRoom].indexOf(userId);
      rooms[activeRoom].splice(index, 1);

      activeUsersIds.push(userId);
      inactiveUsersIds = [...rooms[activeRoom]];

      return { ...state, inactiveUsersIds, activeUsersIds, rooms };
    }
    case SET_USER_INACTIVE: {
      let {
        allUsers,
        inactiveUsersIds,
        activeUsersIds,
        rooms,
        activeRoom,
      } = state;
      const userId = String(action.payload.userId);

      const index = activeUsersIds.indexOf(userId);
      if (index < 0) return { ...state };

      activeUsersIds.splice(index, 1);

      if (rooms[activeRoom].includes(userId)) {
        // throw new Error('same user');
        return { ...state, activeUsersIds };
      }

      rooms[activeRoom].push(userId);
      rooms["all"] = Object.keys(allUsers).filter(
        (userId) => !activeUsersIds.includes(userId)
      );
      inactiveUsersIds = [...rooms[activeRoom]];

      return { ...state, inactiveUsersIds, activeUsersIds, rooms };
    }

    case SET_FILTER_VALUE: {
      const { value } = action.payload;
      return { ...state, filterValue: value };
    }

    case CLEAR_ACTIVE_USERS: {
      let { allUsers, inactiveUsersIds, rooms, activeRoom } = state;
      inactiveUsersIds = [...rooms[activeRoom]];
      rooms["all"] = Object.keys(allUsers);
      return { ...state, rooms, inactiveUsersIds, activeUsersIds: [] };
    }

    case SORT_INACTIVE_USERS_AZ: {
      const { allUsers, inactiveUsersIds } = state;
      const inactiveUsers = inactiveUsersIds.map((id) => ({
        id,
        name: allUsers[id].name,
      }));
      inactiveUsers.sort((userA, userB) => {
        return userA["name"].localeCompare(userB["name"]);
      });
      return {
        ...state,
        inactiveUsersIds: inactiveUsers.map((el) => el["id"]),
      };
    }

    case BAN_ACTIVE_USERS: {
      const { allUsers, activeUsersIds } = state;
      activeUsersIds.forEach((id) => {
        allUsers[id].banned = true;
      });
      return { ...state, allUsers };
    }

    case FILTER_BY_ROOM: {
      let { inactiveUsersIds, rooms } = state;
      const roomName = action.payload;

      if (!Object.keys(rooms).includes(roomName)) return { ...state };

      inactiveUsersIds = rooms[roomName];

      return { ...state, inactiveUsersIds, rooms };
    }

    case CHANGE_ACTIVE_ROOM: {
      let { activeRoom } = state;
      activeRoom = action.payload;
      return { ...state, activeRoom };
    }

    case FETCH_USERS: {
      let users = action.payload;

      console.log(users);

      return { ...state };
    }

    default:
      return { ...state };
  }
};
