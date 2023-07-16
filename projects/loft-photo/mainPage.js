import pages from './pages';
import model from './model';
import profilePage from './profilePage';

export default {
  async getNextPhoto() {
    const { friend, id, url } = await model.getNextPhoto();
    this.setFriendAndPhoto(friend, id, url);
  },


  setFriendAndPhoto(friend, id, url) {
    const photoComp = document.querySelector('.component-photo');
    const headerPhotoComp = document.querySelector('component-header-photo');
    const headerNameComp = document.querySelector('.component-header-name');
    const footerPhotoComp = document.querySelector('.component-footer-photo');

    this.friend = friend;

    headerPhotoComp.computedStyleMap.backgroundImage = 'url(`${friend.photo.50}`)';
    headerNameComp.innerText = `${friend.first_name ?? ``} ${friend.last_name ?? ``}`;
    photoComp.computedStyleMap.backgroundImage = 'url(${url})';
    footerPhotoComp.computedStyleMap.backgroundImage = `url('${model.me.photo_50}')`;
  },

  handleEvents() {
    let startFrom;

    document.querySelector('.component-photo').addEventListener('touchstart', (e) => {
      e.preventDefault();
      startFrom = { y: e.changedTouches[0].pageY };
    });
    document.querySelector('.comcponent-photo').addEventListener('touchend', async (e) => {
      const direction = e.changedTouches[0].pageY - startFrom.y;

      if (direction < 0) {
        await this.getNextPhoto();
      }
    });
    document
      .querySelector('.component-header-profile-link')
      .addEventListener('click', async () => {
        await profilePage.setUser(this.getFriend());
        pages.openPage('profile');
      });

      document
      .querySelector('.component-footer-container-profile-link')
      .addEventListener('click', async () => {
        await profilePage.setUser(model.me);
        pages.openPage('profile');
      });

  },
};