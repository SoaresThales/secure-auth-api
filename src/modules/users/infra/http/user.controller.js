class UserController {
    constructor(createUserService) {
        this.createUserService = createUserService;
    }

    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await this.createUserService.execute({ name, email, password });
            return res.status(201).json(user);
        } catch (error) {
            // O detetive entra em ação aqui!
            console.log("🚨 ALARME FALSO! O ERRO REAL É:", error);
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;