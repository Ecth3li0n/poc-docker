const { spawn } = require("child_process");

function checkCommand(command, callback) {
  const [cmd, ...args] = command.split(" ");
  const proc = spawn(cmd, args);

  proc.on("error", () => {
    console.error(`Erreur: ${cmd} n'est pas installé.`);
    process.exit(1);
  });

  proc.on("close", (code) => {
    if (code !== 0) {
      console.error(`Erreur: ${cmd} n'est pas installé.`);
      process.exit(1);
    } else {
      callback();
    }
  });
}

checkCommand("npm -v", () => {
  checkCommand("docker -v", () => {
    checkCommand("docker-compose -v", () => {
      const install = spawn("npm", ["install"], { cwd: "app" });

      install.stdout.on("data", (data) => {
        process.stdout.write(data);
      });

      install.stderr.on("data", (data) => {
        process.stderr.write(data);
      });

      install.on("close", (code) => {
        if (code !== 0) {
          console.error(`Erreur lors de l'installation des dépendances.`);
          process.exit(1);
        }

        const up = spawn("docker-compose", ["up", "--build"]);

        up.stdout.on("data", (data) => {
          process.stdout.write(data);
        });

        up.stderr.on("data", (data) => {
          process.stderr.write(data);
        });

        up.on("close", (code) => {
          if (code !== 0) {
            console.error(`Erreur lors du démarrage de Docker Compose.`);
            process.exit(1);
          }
        });

        process.on("SIGINT", () => {
          console.log("Arrêt en cours...");
          const down = spawn("docker-compose", ["down"]);

          down.stdout.on("data", (data) => {
            process.stdout.write(data);
          });

          down.stderr.on("data", (data) => {
            process.stderr.write(data);
          });

          down.on("close", () => {
            process.exit();
          });
        });
      });
    });
  });
});
