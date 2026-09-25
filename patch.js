const fs = require('fs');
let code = fs.readFileSync('server.js', 'utf8');
const search = `  } catch (error) {
    console.error("Erro ao analisar hino:", error);
    const num = parseInt(req.body?.numero, 10);
    const hino = hinosData.find(h => h.numero === num);
    if (hino) {
      return res.status(500).json({ error: error.message });
      return res.json({ analise: analiseLocal, hino: { numero: hino.numero, titulo: hino.titulo, autor: hino.autor } });
    }
    res.status(500).json({ error: 'Erro ao gerar análise do hino.' });
  }
});`;
const replace = `  } catch (error) {
    console.error("Erro ao analisar hino:", error);
    return res.status(500).json({ error: 'Erro interno na IA ao gerar análise.' });
  }
});`;
code = code.replace(search, replace);
fs.writeFileSync('server.js', code);
