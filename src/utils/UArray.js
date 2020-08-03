class UArray {
  static removeByIndex(array, index) {
    array.splice(index,1);
    return array;
  }
}
export default UArray;
