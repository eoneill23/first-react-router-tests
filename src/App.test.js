import React from 'react';
import { mount } from 'enzyme';
import App from './App.js';
import { MemoryRouter, Route } from 'react-router-dom';
import Creatures from './Creatures';
import Home from './Home';


describe('Route', () => {
  it('should route to the home page by default', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should re-route to /unicorns when the unicorns NavLink is clicked', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/unicorns']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should re-route to /puppies when the puppies NavLink is clicked', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/puppies']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(1);
  });

  it('should re-route to /sharks when the sharks NavLink is clicked', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sharks']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Creatures)).toHaveLength(1);
  });
});