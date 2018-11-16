<p align="center">
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/instagram-followers"><img src="https://cdn.abranhe.com/projects/instagram-followers/logo.svg"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/instagram-followers">
	instagram-followers</a>: Get the numbers of followers of a user on Instagram
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/instagram-followers"><img src="https://img.shields.io/travis/abranhe/instagram-followers.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/instagram-followers/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/instagram-followers.svg" /></a>


</p>

## Install

```
$ npm install instagram-followers
```

## Usage

```js
const followers = require('instagram-followers');

followers('abranhe').then(no => {
    console.log(no);
    // 460
});
```

## API

### `followers(username)`

*Returns a the number of followers of a person on Instagram*

###### Parameters

- `username` - The username to get followers

## Related

- [instagram-followers-cli][instagram-followers-cli]: cli for this module.

## Team

|[![Carlos Abraham Logo][abranhe-img]][abranhe]|
| :-: |
| [Carlos Abraham][abranhe] |

## License

[MIT][license] License © [Carlos Abraham][abranhe]

<!-------------------- Links ------------------------>
[abranhe]: https://github.com/abranhe
[abranhe-img]: https://avatars3.githubusercontent.com/u/21347264?s=50
[license]: https://github.com/abranhe/instagram-followers/blob/master/license
[instagram-followers-cli]: https://github.com/abranhe/instagram-followers-cli
