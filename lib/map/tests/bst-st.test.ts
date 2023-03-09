import { expect } from "chai";
import SimpleBSTTable from "../simple-bst";

describe('Binary Search Tree - Symbol Table', () => {
  it('should have get and put methods implemented', () => {
    let st = new SimpleBSTTable();
    expect(st.get('nil')).to.equal(null);
    expect(st.size()).to.equal(0);
    st.put('a', '342');
    st.put('b', '34');
    expect(st.size()).to.equal(2);
    expect(st.get('a')).to.equal('342');
    expect(st.get('b')).to.equal('34');
    st.put('z', 321);
    st.put('e', '321');
    st.put('y', 64);
    st.put('yz', 645);
    expect(st.size()).to.equal(6);
    st.put('b', 65);
    st.put('xz', 91);
    st.put('d', 782);
    expect(st.size()).to.equal(9);
    expect(st.get('b')).to.equal(65);
    expect(st.get('yz')).to.equal(645);
  });

  it('should have min and max methods implemented', () => {
    let st = new SimpleBSTTable();
    expect(st.get(100)).to.equal(null);
    expect(st.size()).to.equal(0);
    st.put(9, "Nine");
    st.put(8, "Eight");
    st.put(19, "Nineteen");
    st.put(2, "Two");
    expect(st.size()).to.equal(4);
    st.put(82, "Eighty Two");
    st.put(4, "Four");
    st.put(100, "Hundred");
    expect(st.size()).to.equal(7);
    st.put(1, "One");
    st.put(101, "One O One");
    expect(st.size()).to.equal(9);
    expect(st.min()).to.equal(1);
    expect(st.max()).to.equal(101);
  });

  it('should have floor and ceiling methods implemented', () => {
    let st = new SimpleBSTTable();
    expect(st.get(100)).to.equal(null);
    expect(st.size()).to.equal(0);
    st.put(9, "Nine");
    st.put(8, "Eight");
    st.put(19, "Nineteen");
    expect(st.size()).to.equal(3);
    st.put(2, "Two");
    st.put(82, "Eighty Two");
    st.put(4, "Four");
    expect(st.size()).to.equal(6);
    st.put(100, "Hundred");
    st.put(1, "One");
    st.put(101, "One O One");
    expect(st.size()).to.equal(9);
    expect(st.floor(19)).to.equal(19);
    expect(st.floor(20)).to.equal(19);
    expect(st.floor(50)).to.equal(19);
    expect(st.floor(15)).to.equal(9);
    expect(st.ceiling(82)).to.equal(82);
    expect(st.ceiling(15)).to.equal(19);
  });

  it('should have select and rank methods implemented', () => {
    const st = new SimpleBSTTable();
    expect(st.select(1)).to.equal(null);
    st.put(20, "one");
    st.put(44, "four four");
    st.put(15, "one five");
    st.put(8, "eight");
    st.put(12, "one two");
    // 8 12 15 44 20
    expect(st.select(1)).to.equal(12);  
  })
})