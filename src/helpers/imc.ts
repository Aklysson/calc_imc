export const Levels = [
    {title: 'Magreza',color: '#96a3ab', Ícon: 'down', imc:[0,18.5]},
    {title: 'Normal',color: '#96a3ab', Ícon: 'up', imc:[18.6,24.9]},
    {title: 'Sobrepeso',color: '#96a3ab', Ícon: 'down', imc:[25,30]},
    {title: 'Obesidade',color: '#96a3ab', Ícon: 'down', imc:[30.1,99]}
    ,]

    export const Calculate = (height:number, weight:number) => {
       const imc = weight / (height * height)

        for(let i in Levels){
            if(imc > Levels[i].imc[0] && imc < Levels[i].imc[1]){
                return Levels[i]
            }
        }

        return null
    }