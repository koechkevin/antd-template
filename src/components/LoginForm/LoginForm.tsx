import React, { FC } from 'react';
import { Props } from './LoginForm.interface';
import styles from './LoginForm.module.scss';
import { Button, Form, Input, Typography } from 'antd';

const { useForm, Item } = Form;
const { Password } = Input;
const { Text } = Typography;

const LoginForm: FC<Props> = () => {
  const [form] = useForm();
  return (
    <Form onFinish={console.log} form={form}>
      <Text>Username</Text>
      <Item name="username">
        <Input placeholder="Username" />
      </Item>
      <Text>Password</Text>
      <Item name="password">
        <Password placeholder="Password" />
      </Item>
      <Button className={styles.button} type="primary" htmlType="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
