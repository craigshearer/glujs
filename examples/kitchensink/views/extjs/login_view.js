glu.defView('ks.login', {
    extend: 'Ext.form.Panel',
    xtype: 'panel',
//    title: '@{title}',
    title:'asdf',
    frame: true,
    width: 320,
    bodyPadding: 10,
    defaultType: 'textfield',


    items: [
        {
            allowBlank: false,
            fieldLabel: 'User ID',
            name: 'user',
            emptyText: 'user id'
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        },
        {
            xtype: 'checkbox',
            fieldLabel: 'Remember me',
            name: 'remember'
        }
    ],

    buttons: [
        {
            text: 'Register'
        },
        {
            text: 'Login',
            disabled: '@{loginIsDisabled}',
            listeners:{
                click:'@{login}'
            }
        }
    ]
});