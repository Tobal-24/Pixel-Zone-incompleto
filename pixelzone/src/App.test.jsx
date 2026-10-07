import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DealsGrid } from './components/DealsGrid';
import { CartModal } from './components/CartModal';

describe('Suite de Pruebas Unitarias - PixelZone Store (Vitest)', () => {

  // Test 1: Renderizado de texto principal
  it('1. Debe renderizar el título principal en la sección Hero', () => {
    render(<Hero setCurrentView={() => {}} />);
    expect(screen.getByText(/El Rastreador de Ofertas Definitivo/i)).toBeInTheDocument();
  });

  // Test 2: Renderizado de Navbar
  it('2. Debe mostrar el nombre PixelZone en la barra de navegación', () => {
    render(<Navbar currentView="inicio" setCurrentView={() => {}} cartCount={0} setIsCartOpen={() => {}} />);
    expect(screen.getByText(/PixelZone/i)).toBeInTheDocument();
  });

  // Test 3: Paso de Props (Badge de Carrito)
  it('3. Debe mostrar la cantidad correcta de productos en el indicador del carrito', () => {
    render(<Navbar currentView="inicio" setCurrentView={() => {}} cartCount={5} setIsCartOpen={() => {}} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  // Test 4: Simulación de Eventos (Click)
  it('4. Debe llamar a setCurrentView al hacer clic en Ofertas Relámpago', () => {
    const mockSetView = vi.fn();
    render(<Hero setCurrentView={mockSetView} />);
    const button = screen.getByText(/Ver Ofertas Relámpago/i);
    fireEvent.click(button);
    expect(mockSetView).toHaveBeenCalledWith('catalogo');
  });

  // Test 5: Renderizado Condicional (Modal Cerrado)
  it('5. No debe mostrar el Modal del Carrito cuando isOpen es false', () => {
    render(<CartModal isOpen={false} onClose={() => {}} cart={[]} />);
    expect(screen.queryByText(/Tu Carrito de Compras/i)).not.toBeInTheDocument();
  });

  // Test 6: Renderizado Condicional (Modal Abierto)
  it('6. Debe mostrar el Modal del Carrito cuando isOpen es true', () => {
    render(<CartModal isOpen={true} onClose={() => {}} cart={[]} />);
    expect(screen.getByText(/Tu Carrito de Compras/i)).toBeInTheDocument();
  });

  // Test 7: Estado del Carrito Vacío
  it('7. Debe mostrar el aviso de carrito vacío cuando no hay ítems', () => {
    render(<CartModal isOpen={true} onClose={() => {}} cart={[]} />);
    expect(screen.getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
  });

  // Test 8: Renderizado de Colecciones
  it('8. Debe renderizar las tarjetas de la tienda en DealsGrid', () => {
    render(<DealsGrid />);
    expect(screen.getByText(/Steam Store/i)).toBeInTheDocument();
    expect(screen.getByText(/Epic Games/i)).toBeInTheDocument();
  });

  // Test 9: Cálculo y Muestra de Datos en Carrito
  it('9. Debe mostrar el producto en el carrito si se pasa en los props', () => {
    const mockCart = [{ id: 1, title: 'Cyberpunk 2077', price: 29990, quantity: 2, image: 'test.jpg' }];
    render(<CartModal isOpen={true} onClose={() => {}} cart={mockCart} />);
    expect(screen.getByText(/Cyberpunk 2077/i)).toBeInTheDocument();
  });

  // Test 10: Evento de cierre de Modal
  it('10. Debe ejecutar la función onClose al hacer clic en el botón de cerrar', () => {
    const mockClose = vi.fn();
    render(<CartModal isOpen={true} onClose={mockClose} cart={[]} />);
    const closeBtn = screen.getByRole('button', { name: '' });
    fireEvent.click(closeBtn);
    expect(mockClose).toHaveBeenCalled();
  });

});