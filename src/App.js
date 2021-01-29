import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import UseLocalStorageState from './hooks/useLocalStorage';
import Album from './Album';
import AlbumList from './AlbumList';
import NewAlbumForm from './NewAlbumForm';
import Page from './Page';
import albumData from './data';

export default function App() {
  const defaultAlbums = albumData;
  const [albums, setAlbums] = UseLocalStorageState('albums', [
    ...defaultAlbums
  ]);

  const findAlbum = (id) => {
    return albums.find((album) => album.id === id);
  };

  const saveAlbum = (newAlbum) => {
    setAlbums([...albums, newAlbum]);
  };

  const deleteAlbum = (id) => {
    setAlbums(albums.filter((album) => album.id !== id));
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/'
                render={(routeProps) => (
                  <Page>
                    <AlbumList
                      albums={albums}
                      deleteAlbum={deleteAlbum}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/album/new'
                render={(routeProps) => (
                  <Page>
                    <NewAlbumForm
                      saveAlbum={saveAlbum}
                      albums={albums}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/album/:id'
                render={(routeProps) => (
                  <Page>
                    <Album album={findAlbum(routeProps.match.params.id)} />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
