const pessoaService = require('../services/servicoPessoa'); // Import the PessoaService

class PessoaController {
    async createPessoa(req, res) {
        try {
            const newPessoaData = req.body; // Assuming you send new pessoa data in the request body
            const createdPessoa = await pessoaService.createPessoa(newPessoaData);
            res.status(201).json(createdPessoa);
        } catch (error) {
            console.error('Error creating pessoa:', error);
            res.status(500).json({ error: 'Failed to create pessoa' });
        }
    }
}

module.exports = new PessoaController();