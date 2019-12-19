import React, { useState, useEffect } from 'react';
import { Button, PageHeader, Form, Input,Select,message,Radio } from 'antd';
import history from '../../../router/history'
import IndexModel from './models/indexModle'
import { observer } from "mobx-react-lite"
const { Option } = Select;
const { TextArea } = Input;
const AddCategory = observer((props) => {
    const [id, setId] = useState(null)
    useEffect(() => {
        const {setFieldsValue } = props.form
        setId(props.match.params.id)
        if(props.match.params.id!=="0"){
            IndexModel.getCategoryById(props.match.params.id,(res)=>{
                console.log(res)
                setFieldsValue(res)
            })
        }
    }, [])
    const goBack = () => {
        history.push('/category-list')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            console.log(err, values)
            if (!err) {
                if(id==='0'){
                    IndexModel.postAddCategory(values,()=>{
                        message.success('新增成功')
                        history.push('/category-list')
                    })
                }else{
                    IndexModel.putCategoryById(id,values,()=>{
                        message.success('新增成功')
                        history.push('/category-list')
                    })
                }
                console.log('Received values of form: ', values);
            }
        });
    }
    const formItemLayout = {
        labelCol: {
            xs: { span: 3 },
            sm: { span: 3 },
        },
        wrapperCol: {
            xs: { span: 10 },
            sm: { span: 10 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const { getFieldDecorator } = props.form;
    return (<PageHeader
        title={id === '0' ? '添加分类' : '编辑分类'}
        // subTitle="数据列表"
        extra={[
            <Button onClick={() => goBack()}>返回</Button>
        ]}
    >
        <div style={{ marginTop: '30px' }}>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
                <Form.Item label="分类名称">
                    {getFieldDecorator('categoryName', {
                        rules: [
                            {
                                required: true,
                                message: '请输入分类名称!',
                            },
                        ],
                    })(<Input placeholder="请输入分类名称"/>)}
                </Form.Item>
                <Form.Item label="上级分类" help="不选择分类默认为顶级分类">
                    {getFieldDecorator('topCategory')(
                       <Select
                            laceholder="请选择上级分类"
                        >
                       <Option value='1'>服饰</Option>
                   </Select>
                    )}
                </Form.Item>
                <Form.Item label="数量单位">
                    {getFieldDecorator('unit')
                        (<Input placeholder="请输入数量单位"/>)
                    }
                </Form.Item>
                <Form.Item label="是否显示">
                    {getFieldDecorator('visible',{
                        initialValue: 0,
                    })(
                        <Radio.Group>
                        <Radio value={0}>是</Radio>
                        <Radio value={1}>否</Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item label="是否显示在导航栏">
                    {getFieldDecorator('visibleTab',{
                        initialValue: 0,
                    })(
                        <Radio.Group>
                            <Radio value={0}>是</Radio>
                            <Radio value={1}>否</Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item label="关键词">
                    {getFieldDecorator('antistop')
                        (<Input placeholder="请输入关键词"/>)
                    }
                </Form.Item>
                <Form.Item label="分类描述">
                    {getFieldDecorator('categoryDescription')
                        (<TextArea rows={6} placeholder="请输分类描述"/>)
                    }
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
            
        </div>
    </PageHeader>
    )
})
// export default AddCategory
export default Form.create()(AddCategory);