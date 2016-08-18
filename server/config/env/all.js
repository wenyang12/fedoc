module.exports = {
	APP: {
		port: process.env.PORT || 13000,
		session: {
			secret: '_fedoc',
			key: '_fedoc_sid',
			collection: 'sessions'
		},
		cookie: {
			path: '/',
			defMaxAge: 86400000 //passport的session生民周期
		}
	},
	USERS: {
		avatar: {
			default: 'http://7xohgg.com2.z0.glb.qiniucdn.com/images/avatar_120_120.png'
		},
		superadmins: [{
			email: 'zhangc@fxiaoke.com',
			pwd: '123456'
		},{
			email: 'zhanglt@fxiaoke.com',
			pwd: '123456'
		},{
			email: 'maxiyue@fxiaoke.com',
			pwd: '123456'
		}]
	},
	LIST: {
		perPage: 5,
		limitPage: 10
	},
    TIME: {
        // midnight: '0 3 15 * * *'
        midnight: '0 10 1 * * *'
    },
    DEPLOYS:{
    	status:{
    		initial:10,
    		success:20
    	}
    }
};
