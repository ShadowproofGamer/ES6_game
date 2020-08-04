export {spritePosition};
class spritePosition{
    constructor(){

    }
    _sprite = [];
    _onScreen = [];
    update(){};
    render(){return this._onScreen};
    add(sprite){this._sprite.push(sprite)};
    del(sprite){
        let _index = this._sprite.findIndex(sprite);
        console.log(`index ${sprite} = ${_index}`);

    };


}


