class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const token = await this.authService.login(email, password);
      
      return res.status(200).json({ token });
    } catch (error) {
      const statusCode = error.statusCode || 500;
      return res.status(statusCode).json({ error: error.message });
    }
  }
}

module.exports = AuthController;