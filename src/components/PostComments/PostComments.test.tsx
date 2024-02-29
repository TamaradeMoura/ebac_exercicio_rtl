import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Teste para renderizar os comentário', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('comentarios'), {
            target: {
                value: 'Parabéns'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        
        fireEvent.change(screen.getByTestId('comentarios'), {
            target: {
                value: 'show'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getAllByTestId('campo-comentario')).toHaveLength(2)
    })
});