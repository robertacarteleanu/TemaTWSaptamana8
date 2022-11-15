function addTokens(input, tokens){
    
    if (!(typeof input==='string'))
        throw("Invalid input");
        else{
            if(input.length<6) 
                throw("Input should have at least 6 characters");
        }
   /* if(!Object.values(tokens).every(value => typeof value === 'string'))
        throw('Invalid array format');*/
        for(let j=0;j<tokens.length;j++){
            if(typeof tokens[j]["tokenName"]!=='string')
                throw('Invalid array format');
        }
    
    if(input.includes("...")==false)
        return input;
    else{
            for(let i=0;i<tokens.length;i++){
                input=input.replace("...","${"+tokens[i]["tokenName"]+"}");
            }
            return input;
        }
        

}

const app = {
    addTokens: addTokens
}

module.exports = app;






