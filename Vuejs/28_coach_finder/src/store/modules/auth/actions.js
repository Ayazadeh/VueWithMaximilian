export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCp3qvG-odvraBgm14HEsnPXJOL-KnRP50",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate."
      );
      throw error;
    }

    context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
    })
  },
};
