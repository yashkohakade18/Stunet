import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('stunet_favorites', []);

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return { favorites, isFavorite, toggleFavorite };
}
