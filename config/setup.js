import 'dotenv/config'
import AuthHelper from "../helpers/auth.helper";

    before(async function() {
        const authHelper = new AuthHelper()
        await authHelper.login(process.env.LOGIN, password.env.PASSWORD)
        process.env['TOKEN'] = authHelper.response.body.token
})