/**
 * @function createDefaultMolecule
 * Creates a default kekule Molecue (CCO)
 * @return<Kekule.Molecule>
 */
function createDefaultMolecule() {
  // Initialize a new formulas object
  let mol = new Kekule.Molecule();
  // add three atoms to molecule, property setter can be called cascadely
  let a1 = (new Kekule.Atom()).setSymbol('C').setCoord2D({'x': -0.4, 'y': 0.23});
  var a2 = (new Kekule.Atom()).setSymbol('C').setCoord2D({'x': 0.4, 'y': 0.23});
  var a3 = (new Kekule.Atom()).setSymbol('O').setCoord2D({'x': 0, 'y': -0.46});
  mol.appendNode(a1);
  mol.appendNode(a2);
  mol.appendNode(a3);
  // add three bonds to molecule
  let b1 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a1, a2]);
  let b2 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a2, a3]);
  let b3 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a3, a1]);
  mol.appendConnector(b1);
  mol.appendConnector(b2);
  mol.appendConnector(b3);

  return mol;
}

/**
 * check if a formulas object already exists, otherwise create a new one with a default formula
 */
if (localStorage.getItem('formulas') === null) {
  let formulas = {};
  formulas['carbonyl'], createDefaultMolecule();
  localStorage.setItem('formulas', formulas);
}

// initialize the collections page
window.chemeditor = {}; // Kinky JavaScript, why don't you initialize nested objects on the fly?
window.chemeditor.formulas = localStorage.getItem('formulas');

console.debug(window.chemeditor.formulas);

// populate the editor with the latest formula
