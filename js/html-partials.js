document.addEventListener("DOMContentLoaded", async () => {
    const includeNodes = Array.from(document.querySelectorAll("[data-include-html]"));

    await Promise.all(
        includeNodes.map(async (node) => {
            const includePath = node.getAttribute("data-include-html");
            if (!includePath) {
                return;
            }

            try {
                const response = await fetch(includePath, { cache: "no-cache" });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                node.innerHTML = await response.text();
            } catch (error) {
                node.innerHTML = "<p>No se pudo cargar esta sección.</p>";
                console.error("Error cargando parcial HTML:", includePath, error);
            }
        })
    );
});
