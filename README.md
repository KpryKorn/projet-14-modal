# Utilisation du composant Modal

Le composant Modal est une solution légère et réutilisable pour afficher des contenus en superposition de votre application. Stylisé avec Tailwind CSS, ce composant est conçu pour être à la fois fonctionnel et flexible.

## Installation

_Ce composant est conçu pour une application React et Tailwind. Merci de vérifier que votre projet utilise ces librairies_

```bash
npm i projet-14-modal
```

## Fonctionnalités

- Ouverture/fermeture de la modale
- Fermeture par clic à l'extérieur de la modale
- Fermeture avec la touche Échap
- Blocage du défilement de la page lorsque la modale est ouverte
- Titre optionnel
- Contenu (children) entièrement personnalisable

## Utilisation de base

```ts
import { useState } from "react";
import { Modal } from "./components/ui/Modal";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Ouvrir la modale
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Titre de ma modale"
      >
        <p>Voici le contenu de ma modale.</p>
      </Modal>
    </div>
  );
}
```
