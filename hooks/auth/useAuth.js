// import axios from "axios";
// import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";
import { ADMIN_URLS, USER_URLS } from "./pageUrls";
import { ROLES } from "./role";

// export default () => {
//   const [auth, setAuth] = useState({ status: false });

// const verifyAuth = async () => {
// try {
//   const res = await axios.get("/v1/user/is_logged_in");
//   return res.data;
// } catch (err) {
//   console.log(err);
//   return false;
// }
// };

//   useEffect(() => {
//     (async () => {
//       const data = await verifyAuth();
//       setAuth(data);
//     })();
//   }, []);

//   return { auth };
// };

/* -------------------------------------------------------------------------- */
/*                                  With Auth                                 */
/* -------------------------------------------------------------------------- */

export function withAuth(gssp) {
  return async (ctx) => {
    try {
      const { req, resolvedUrl } = ctx || {};

      const accessToken = req.cookies._user_;

      if (accessToken) {
        const { user } = jwtDecode(accessToken);
        // console.log(user, "user");

        if (user.role === ROLES.USER) {
          if (ADMIN_URLS.includes(resolvedUrl)) {
            return {
              redirect: {
                destination: "/",
              },
            };
          }
        }

        if (user.role === ROLES.ADMIN) {
          if (USER_URLS.includes(resolvedUrl)) {
            return {
              redirect: {
                destination: "/admin/dashboard",
              },
            };
          }
        }
      }

      if (!accessToken) {
        return {
          redirect: {
            destination: "/login-or-register",
          },
        };
      }
    } catch (error) {
      console.log(error);
    }
    return await gssp(ctx);
  };
}

/* -------------------------------------------------------------------------- */
/*                                without Auth                                */
/* -------------------------------------------------------------------------- */
export function withoutAuth(gssp) {
  return async (ctx) => {
    const { req } = ctx || {};

    const accessToken = req.cookies._user_;

    if (accessToken) {
      const { user } = jwtDecode(accessToken);
      // console.log(user, "user");

      if (user.role === ROLES.ADMIN) {
        return {
          redirect: {
            destination: "/admin/dashboard",
          },
        };
      } else {
        return {
          redirect: {
            destination: "/",
          },
        };
      }
    }

    return await gssp(ctx);
  };
}
