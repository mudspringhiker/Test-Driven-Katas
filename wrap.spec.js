const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('is a function', () => {
        expect(wrap).to.be.a('function');
    });

    it('returns an empty string if an empty string is provided', () => {
        expect(wrap("", 10)).to.equal("");
    });

    it('returns the string when no column number is provided', () => {
        expect(wrap("The quick brown fox")).to.equal("The quick brown fox");
    });

    it('returns the string when there is no space in the string', () => {
        expect(wrap("Christmas", 5)).to.equal('Christmas');
    });

    it('returns the proper break in the text', () => {
        expect(wrap("Lorem ipsum dolor sit whatever", 20)).to.equal(`Lorem ipsum dolor\nsit whatever`);
    });
    const string = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
    it('returns the wrapped text given the column number', () => {
        expect(wrap(string, 20)).to.equal(`Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`)
    })
});
