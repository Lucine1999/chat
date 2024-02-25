import { prisma } from "../../services/Prisma.js";

const { user } = prisma;

export const getAllUsersDb = async (keyword) => {
  try {
    const users = await user.findMany({
      where: {
        ...(keyword && {
          OR: [
            {
              firstName: {
                contains: keyword,
              },
            },
            {
              lastName: {
                contains: keyword,
              },
            },
            {
              email: {
                contains: keyword,
              },
            },
          ],
        }),
      },
    });
    return {
      data: users,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};
export const getUserByIdDb = async (id) => {
  try {
    const users = await user.findUnique({
      where: {
        id: Number(id),
      },
    });
    return {
      data: users,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export const getUserByEmailDb = async (email) => {
  try {
    const userData = await user.findUnique({
      where: {
        email,
      },
    });
    return {
      data: userData,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export const createUserDb = async (sendedData) => {
  try {
    const newUser = await user.create({
      data: sendedData,
    });
    return {
      data: newUser,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const addUserRefreshToken = async (id, token) => {
  try {
    const updatedUser = await user.update({
      where: {
        id,
      },
      data: {
        refreshToken: token,
      },
    });
    return {
      data: updatedUser,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export const removeUserRefreshToken = async (id) => {
  try {
    const updatedUser = await user.update({
      where: {
        id,
      },
      data: {
        refreshToken: null,
      },
    });
    return {
      data: updatedUser,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};
