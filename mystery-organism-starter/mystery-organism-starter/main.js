// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let randoindex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
    }
  }
  
  compareDNA(pAequor) {
    let count = 0;
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === pAequor.dna[i]) {
        count++;
      }
    }
    const percentage = (count / this.dna.length) * 100;
    console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common.`);
  }
  willLikelySurvive() {
    let count = 0;
    for(let i = 0; i < this.dna.length; ++i) {
      if(this.dna[i] === 'C' || this,dna[i] === 'G') {
        count++;
      } 
    }
    const percentage = (count / this.dna.length) * 100;
    return percentage >= 60;
  
  }
}





let pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor.dna);
console.log(pAequor.mutate());